import {Apple} from './apple'
import * as test from 'tape';

test ('give back apple', t => {
let alma = new Apple;
t.equal(alma.apple(), 'apple')
t.end()
})