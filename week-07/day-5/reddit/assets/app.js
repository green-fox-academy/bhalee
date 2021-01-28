'use strict';

function addPost() {
  const postsDiv = document.querySelector('.posts');
  let postBoxDiv = document.createElement('div');
  postBoxDiv.setAttribute('class', 'post-box');
  let voteButtonsDiv = document.createElement('div');
  voteButtonsDiv.setAttribute('class', 'vote-buttons');
  let upArrow = document.createElement('img');
  let downArrow = document.createElement('img');
  let numberOfVotes = document.createElement('p');
  let postContentDiv = document.createElement('div');
  postContentDiv.setAttribute('class', 'post-content')


  voteButtonsDiv.appendChild(upArrow);
  voteButtonsDiv.appendChild(numberOfVotes);
  voteButtonsDiv.appendChild(downArrow);
  postBoxDiv.appendChild(voteButtonsDiv);
  postBoxDiv.appendChild(postContentDiv);
  postsDiv.appendChild(postBoxDiv);
}

addPost();
