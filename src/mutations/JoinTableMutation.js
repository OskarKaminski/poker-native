import {graphql, commitMutation} from 'react-relay';
import {environment} from '../adapters/relay-environment'

const mutation = graphql`
  mutation JoinTableMutation($userId : String, $tableId: String){
    joinTable(profileId: $userId, tableId: $tableId){
      id
      chips
      profile{
        id
        nickname
        imgUrl
      }
    }
  }
`;

const variables = {
  userId: '59acf3be4b90740bbade93e7',
  tableId: '59abf1a01710ba3b74718221'
};

export default (cb) => {
  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater: (store) => {
      },
    },
  );
}
