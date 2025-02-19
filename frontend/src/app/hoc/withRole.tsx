import React from 'react';
import { useAuth } from '../context/AuthContext';

type Role = 'user' | 'developer' | 'admin';

const withRole = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  allowedRoles: Role[]
) => {
  const ComponentWithRole: React.FC<P> = (props) => {
    const { role } = useAuth();

    if (!role) {
      return <div>请先登录后再访问该页面。</div>;
    }

    if (!allowedRoles.includes(role)) {
      return <div>访问受限：您没有权限查看此页面。</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithRole;
};

export default withRole;
