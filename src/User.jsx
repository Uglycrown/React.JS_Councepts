function User({ userObject, name= "Default Name" }) {
    return (
        <>
            {/* <h1>Name: {userObject.name}</h1>
            <h1>Age: {userObject.age}</h1>
            <h1>Location: {userObject.location}</h1> */}
            <h1>Advanced Props Concept</h1>
            <h1>{name}</h1>
        </>
    );
}

export default User;
