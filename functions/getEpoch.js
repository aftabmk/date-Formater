function getEpoch(Day, time) 
{
    if(typeof(time && Day)  === 'string')
    {
        let date = `${Day} ${time}`
        let monthPosition = date.split('/', 2).join('/').length
        let day = date.substring(0, date.indexOf('/'))
        let month = date.substring(date.indexOf('/') + 1, monthPosition);
        let year_time = date.substring(month.length + day.length + 1)
        let result = month + "/" + day + year_time ;
        let epochTime = Date.parse(result)/1000;
        return epochTime
    }
    else
    {
        return 'Type of Day and time must be in string, format Date = "10/02/1990" & Time "14:06"'
    }
}
function getEpochNow()
{
    let epochTime = Date.parse(new Date().toString())/1000;
    return epochTime
}

module.exports = { getEpoch ,getEpochNow }
