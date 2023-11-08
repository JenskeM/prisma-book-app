class NotFoundError extends Error {
    constructor(resourceType, id) {
        super(`${resourceType} with id ${id} was not found!`);
        this.name = 'NotFoundError';
    }
}

export default NotFoundError;



// class NotFoundError extends Error {
//     constructor(msg, resourceType, resourceID) {
//         super(msg)
//         this.name = 'NotFoundError'
//         this.resourceType = resourceType
//         this.resourceID = resourceID
//     }

// }

// try {
//     throw new NotFoundError(`In ${resourceType} the id ${resourceID} is not found.`, resourceType, resourceID);
// }
// catch (err) {
//     console.error(err);
//     console.error(err.name);
//     console.error(err.msg);
//     console.error(err.resourceType);;
//     console.error(err.resourceID)
// }


// export default NotFoundError