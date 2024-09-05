export const printPrice = (price) => {
    return 'Tk. '+ price
}

export const formatDate = (dateStr) => {
    const [day, month, year] = dateStr.split('-');
    return new Date(`${year}-${month}-${day}`);
}