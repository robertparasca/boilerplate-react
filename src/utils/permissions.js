export const hasPermissions = (userPermissions = [], guards = []) => {
    return guards.every((guard) => userPermissions.indexOf(guard) !== -1);
};
