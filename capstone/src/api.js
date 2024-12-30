export function fetchAPI() {
    let result = [];
    for(let i = 11; i <= 16; i++) {
        let random = Math.random()*10;
        if(random < 8) {
            result.push(i + ':00');
        }
        if(random < 4) {
            result.push(i + ':30');
        }
    }
    return result;
};
export function submitAPI(formData) {
    return true;
};