module.exports.sendResponse = (res, statusCode, data, headers) => {
    if(!headers){
        headers = corsHeaders;
    }
    res.status(statusCode);
    res.set(headers);
    res.send(JSON.stringify(data));
};

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
};
