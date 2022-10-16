const { prepend } = require("../helpers/prepend")
const { reduce } = require("../helpers/reduce")

function getDate(prevDay, prevMonth, prevFullYear, setYear, type) {
    if (typeof(prevDay && prevMonth && prevFullYear ) === 'number' && typeof (setYear) === 'boolean' && typeof (type) === 'string') {
        let date = new Date()
        const day = prepend(reduce(date.getDate(), prevDay))
        const month = prepend(reduce(date.getMonth() + 1, prevMonth))
        const year = prepend(reduce(Number(date.getFullYear().toString().substring(2)), prevFullYear))
        const yearFull = prepend(reduce(date.getFullYear(), prevFullYear))
        setYear ? typeYear = year : typeYear = yearFull

        switch (type) {
            case 'ampersand': format = day + '&' + month + '&' + typeYear; break
            case 'apostrophe': format = day + "'" + month + "'" + typeYear; break
            case 'asterisk': format = day + "*" + month + "*" + typeYear; break
            case 'atSign': format = day + "@" + month + "@" + typeYear; break
            case 'dot': format = day + "." + month + "." + typeYear; break
            case 'dollar': format = day + '$' + month + '$' + typeYear; break
            case 'hyphen': format = day + '-' + month + '-' + typeYear; break
            case 'underScore': format = day + '_' + month + '_' + typeYear; break
            case 'exclamation': format = day + '!' + month + '!' + typeYear; break
            case 'hash': format = day + '#' + month + '#' + typeYear; break
            case 'quotation': format = day + '"' + month + '"' + typeYear; break
            case 'forwardSlash': format = day + '/' + month + '/' + typeYear; break;
        }
        return format
    }
    else {
        return 'error in input,prevDay , prevMonth and prevYear must be number setYear(option 4) must be in boolean and type(option 5) must be string '
    }
}
function getDateNow(setYear, type) {
    if(typeof(setYear) === 'boolean' && typeof (type) === 'string') {

        let date = new Date()
        const day = prepend(date.getDate())
        const month = prepend(date.getMonth() + 1)
        const year = prepend(Number(date.getFullYear().toString().substring(2)))
        const yearFull = prepend(date.getFullYear())
        setYear ? typeYear = year : typeYear = yearFull

        switch (type) {
            case 'ampersand': format = day + '&' + month + '&' + typeYear; break
            case 'apostrophe': format = day + "'" + month + "'" + typeYear; break
            case 'asterisk': format = day + "*" + month + "*" + typeYear; break
            case 'atSign': format = day + "@" + month + "@" + typeYear; break
            case 'dot': format = day + "." + month + "." + typeYear; break
            case 'dollar': format = day + '$' + month + '$' + typeYear; break
            case 'hyphen': format = day + '-' + month + '-' + typeYear; break
            case 'underScore': format = day + '_' + month + '_' + typeYear; break
            case 'exclamation': format = day + '!' + month + '!' + typeYear; break
            case 'hash': format = day + '#' + month + '#' + typeYear; break
            case 'quotation': format = day + '"' + month + '"' + typeYear; break
            case 'forwardSlash': format = day + '/' + month + '/' + typeYear; break;
        }
        return format
    }
    else {
        return 'error in input, setYear(option 1) must be in boolean and type(option 2) must be string'
    }
}

module.exports = { getDate, getDateNow }