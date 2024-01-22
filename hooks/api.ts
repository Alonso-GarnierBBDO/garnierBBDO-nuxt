const postWork = async (body : FormData) => {

    return await fetch('http://127.0.0.1:8000/api/nuevo-empleo', {
        method: "POST",
        body: body,
    }).then(async (res) => {
        return res.status;
    }).catch((error) => {
        return 419;
    });

}

export default postWork;
