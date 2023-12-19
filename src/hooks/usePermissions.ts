import {Role} from 'types/role.enum';
import useToken from './useToken';

const usePermissions = (permissions: Role[], operator: 'OR' | 'AND') => {
  const {decodedToken} = useToken();
  const decodedTokenRole = decodedToken?.role;

  const hasAllPermissions = permissions.every(p => p === decodedTokenRole);
  const hasAnyPermission = permissions.some(p => p === decodedTokenRole);

  const hasPermissions = operator === 'AND' ? hasAllPermissions : hasAnyPermission;

  return {hasPermissions};
};

export default usePermissions;
