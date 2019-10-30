export const hasPermissions = (userPermissions = [], guards = []) => {
    console.log(userPermissions, guards);
    return guards.every((guard) => userPermissions.indexOf(guard) !== -1);
};
