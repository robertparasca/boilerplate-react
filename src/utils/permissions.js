export const hasPermissions = (userPermissions = [], guards = []) => {
    if (userPermissions[0] && userPermissions[0].name) {
        userPermissions = userPermissions.map((permission) => permission.name);
    }
    return guards.every((guard) => userPermissions.indexOf(guard) !== -1);
};
