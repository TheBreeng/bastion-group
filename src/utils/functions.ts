export const isEmptyFields = (obj: object) => {
    if (Object.values(obj).every((value) => value.trim())) {
        return true;
    } else {
        return false;
    }
};
