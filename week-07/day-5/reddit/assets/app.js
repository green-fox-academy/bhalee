'use strict';

fetch('/posts', { headers: { user_id: '2' } })
  .then((response) => response.json())
  .then((response) => {
    return response;
  })
  .then((response) => {
    response.forEach((element) => {
      if (!element.vote || element.vote === 0) {
        addPost('/upvote.png', '/downvote.png', element.score, element.owner, element.timestamp, element.title, element.url, element.post_id, false);
      } else if (element.vote === 1) {
        addPost('/upvoted.png', '/downvote.png', element.score, element.owner, element.timestamp, element.title, element.url, element.post_id, false);
      } else if (element.vote === -1) {
        addPost('/upvote.png', '/downvoted.png', element.score, element.owner, element.timestamp, element.title, element.url, element.post_id, false);
      }
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

let postsSelector = document.querySelector('.container');

postsSelector.addEventListener('click', (event) => {
  let getId = event.target.getAttribute('id');
  let getClass = event.target.getAttribute('class');
  if (getClass === `up-arrow ${getId}`) {
    event.preventDefault();
    fetch(`/posts/${getId}/upvote`, { headers: { user_id: '2' }, method: 'PUT' })
      .then((response) => response.json())
      .then((response) => {
        let votes = document.querySelector(`#votes-${getId}`);
        votes.innerHTML = response[0].score;
        let downArrow = document.getElementsByClassName(`down-arrow ${getId}`);
        
        if (response[0].vote === 1 || response[0].vote === undefined) {
          event.target.setAttribute('src', '/upvoted.png');
          downArrow[0].setAttribute('src', '/downvote.png');
        } else {
          event.target.setAttribute('src', '/upvote.png');
          downArrow[0].setAttribute('src', '/downvote.png');
        }
      });
  } else if (getClass === `down-arrow ${getId}`) {
    event.preventDefault();
    fetch(`/posts/${getId}/downvote`, { headers: { user_id: '2' }, method: 'PUT' })
      .then((response) => response.json())
      .then((response) => {
        let votes = document.querySelector(`#votes-${getId}`);
        votes.innerHTML = response[0].score;
        let upArrow = document.getElementsByClassName(`up-arrow ${getId}`);
        if (response[0].vote === -1 || response[0].vote === undefined) {
          event.target.setAttribute('src', '/downvoted.png');
          upArrow[0].setAttribute('src', '/upvote.png');
        } else {
          event.target.setAttribute('src', '/downvote.png');
          upArrow[0].setAttribute('src', '/upvote.png');
        }
      });
  }
});

postsSelector.addEventListener('submit', (event) => {
  event.preventDefault();
  const newPostUrl = document.querySelector('#add-url').value;
  const newPostTitle = document.querySelector('#add-title').value;

  let data = {
    title: newPostTitle,
    url: newPostUrl,
  };

  fetch(`/posts`, { method: 'POST', body: JSON.stringify(data), headers: { user_id: '2', Accept: 'application/json', 'Content-Type': 'application/json' } })
    .then(function (res) {
      return res.json();
    })
    .then((data) => {
      let style = document.createElement('STYLE');
      let keyframes = document.createTextNode(`@keyframes posts 
      {from {top: -140px;}
        to {top: 0px;} }`);

      style.appendChild(keyframes);
      document.head.appendChild(style);
      addPost('/upvote.png', '/downvote.png', data[0].score, data[0].owner, data[0].timestamp, data[0].title, data[0].url, data[0].post_id, true);
      return keyframes;
    })
    .then((keyframes) => {
      setTimeout(() => {
        const form = document.querySelector('form');
        form.reset();
        keyframes.remove();
        let newPost = document.querySelector('.new-post-box');
        newPost.setAttribute('class', 'post-box');
      }, 5000);
    });
});

function addPost(upArrowStatus, downArrowStatus, postScore, ownerName, timeData, postTitle, url, postId, newPost) {
  timeData = timeSince(timeData);

  const postsDiv = document.querySelector('.posts');
  let postBoxDiv = document.createElement('div');
  postBoxDiv.setAttribute('class', 'post-box');
  let voteButtonsDiv = document.createElement('div');
  voteButtonsDiv.setAttribute('class', 'vote-buttons');

  let upArrow = document.createElement('img');
  let downArrow = document.createElement('img');
  upArrow.setAttribute('class', `up-arrow ${postId}`);
  upArrow.setAttribute('id', `${postId}`);
  upArrow.setAttribute('src', upArrowStatus);
  downArrow.setAttribute('id', `${postId}`);
  downArrow.setAttribute('class', `down-arrow ${postId}`);
  downArrow.setAttribute('src', downArrowStatus);

  let numberOfVotes = document.createElement('p');
  numberOfVotes.setAttribute('id', `votes-${postId}`);
  numberOfVotes.innerHTML = postScore;
  let postContentDiv = document.createElement('div');
  postContentDiv.setAttribute('class', 'post-content');
  let postInfoDiv = document.createElement('div');
  postInfoDiv.setAttribute('class', 'post-info');
  let postedByP = document.createElement('p');
  postedByP.innerHTML = 'posted by';
  let postOwnerA = document.createElement('a');
  postOwnerA.setAttribute('class', 'post-owner');
  postOwnerA.innerHTML = ownerName;
  let postedDate = document.createElement('p');
  postedDate.innerHTML = timeData;
  let postTitleA = document.createElement('a');
  postTitleA.setAttribute('class', 'post-title');
  postTitleA.setAttribute('href', url);
  postTitleA.setAttribute('target', '_blank');
  postTitleA.innerHTML = postTitle;

  postInfoDiv.appendChild(postedByP);
  postInfoDiv.appendChild(postOwnerA);
  postInfoDiv.appendChild(postedDate);
  postContentDiv.appendChild(postInfoDiv);
  postContentDiv.appendChild(postTitleA);
  voteButtonsDiv.appendChild(upArrow);
  voteButtonsDiv.appendChild(numberOfVotes);
  voteButtonsDiv.appendChild(downArrow);
  postBoxDiv.appendChild(voteButtonsDiv);
  postBoxDiv.appendChild(postContentDiv);

  if (!newPost) {
    postsDiv.appendChild(postBoxDiv);
  } else {
    postBoxDiv.setAttribute('class', 'new-post-box');
    let firstPostBox = document.querySelectorAll('.post-box');
    postsDiv.insertBefore(postBoxDiv, firstPostBox[0]);
  }
}

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' years ago';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months ago';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days ago';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours ago';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes ago';
  }
  return Math.floor(seconds) + ' seconds ago';
}

const form = document.querySelector('form');

form.addEventListener(
  'focus',
  (event) => {
    const classAtt = event.target.getAttribute('class');
    if (classAtt === 'input') {
      event.target.style.border = '1px solid black';
      event.target.style.outline = 'none';
    }
  },
  true
);

form.addEventListener(
  'blur',
  (event) => {
    const classAtt = event.target.getAttribute('class');
    if (classAtt === 'input') {
      event.target.style.border = 'solid 1px lightgrey';
    }
  },
  true
);

const loginDiv = document.querySelector('.login-info');

loginDiv.addEventListener('click', (event) => {
  const theClass = event.target.getAttribute('class');

  if (theClass === 'new-post-button') {
    const activeForm = document.querySelector('.form');
    activeForm.style.display = 'flex';

    let style = document.createElement('STYLE');
    let keyframes = document.createTextNode(`
    @keyframes form {
      from {top: -400px;}
      to {top: 0px;}
    }
    @keyframes posts {
      from {top: -300px;}
      to {top: 0px;}
    }
  `);
    style.appendChild(keyframes);
    document.head.appendChild(style);

    let posts = document.querySelector('.posts');
    posts.style.top = '550px';

    setTimeout(() => {
      keyframes.remove();
    }, 5000);
  }
});
