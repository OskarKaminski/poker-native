import {find} from 'lodash';
import {users} from './login';

class Viewer{
  nickname = '';

  get graphID(){
    return find(users, {nickname: this.nickname}).graphID;
  }
}

export default new Viewer()