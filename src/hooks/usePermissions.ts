import {Role} from 'types/role.enum';
import {useSelector} from 'react-redux';

const usePermissions = (permissions: Role[], operator: 'OR' | 'AND') => {
  const userRole = useSelector((state: any) => state.auth.userData.role);

  const hasAllPermissions = permissions.every(p => p === userRole);
  const hasAnyPermission = permissions.some(p => p === userRole);

  const hasPermissions = operator === 'AND' ? hasAllPermissions : hasAnyPermission;

  return {hasPermissions};
};

export default usePermissions;
