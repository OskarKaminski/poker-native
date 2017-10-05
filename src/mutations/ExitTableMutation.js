import {graphql, commitMutation} from 'react-relay';
import {environment} from '../adapters/relay-environment'

const mutation = graphql`
  mutation ExitTableMutation($userId : String, $tableId: String){
    exitTable(profileId: $userId, tableId: $tableId){
      name
      stake
      players{
        id
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
