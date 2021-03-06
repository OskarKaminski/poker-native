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

export default (userId, tableId, cb) => {
  commitMutation(
    environment,
    {
      mutation,
      variables: {
        userId,
        tableId
      },
      updater: (store) => {
      },
    },
  );
}
