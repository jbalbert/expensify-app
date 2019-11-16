
export const setTextFilter = (text= '') => ({
    type : 'SET_TEXT_FILTER',
    text
});


export const sortByAmount = () => ({
    type : 'SET_AMOUNT_FILTER'
});

export const sortByDate = () => ({
    type : 'SET_DATE_FILTER'
});

export const setStartDate = (startDate) => ({
    type : 'SET_START_DATE_FILTER',
    startDate
});

export const setEndDate = (endDate) => ({
    type : 'SET_END_DATE_FILTER',
    endDate : endDate
});