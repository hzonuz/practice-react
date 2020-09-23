const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT = 'DECREASE_COUNT';

const inc = () => ({type: INCREASE_COUNT});
const dec = () => ({type: DECREASE_COUNT});

export {
    INCREASE_COUNT,
    DECREASE_COUNT,
    inc,
    dec
}