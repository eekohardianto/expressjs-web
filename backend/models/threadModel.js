import db from "../config/database.js";

export const getProducts = (result) => {
    db.query("SELECT * FROM thread", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getProductById = (id, result) => {
    db.query("SELECT * FROM thread WHERE idthread = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

export const insertProduct = (data, result) => {
    db.query("INSERT INTO thread SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const updateProductById = (data, id, result) => {
    db.query("UPDATE thread SET thread_name = ?, thread_content = ? WHERE idthread = ?", [data.thread_name, data.thread_content, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const deleteProductById = (id, result) => {
    db.query("DELETE FROM thread WHERE idthread = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}