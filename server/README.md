/*
Modelling Relationships:
-----------------------------
1- using References called (Normalization) (consistency):
In this approach, you store a reference (like an ObjectId) to another document 
instead of embedding the actual document. This is similar to the concept of foreign keys in relational databases.

let author = {
  name: 'Emad'
}

let course = {
  author: 'id'
}

// check the : reference-relation.js
/---------------------------------------/
2- using Embedded Documents called (De-Normalization) (performance) (weak consistency):
In embedding, you store the related data directly inside the parent document. 
This can be more efficient for read-heavy operations, but it can lead to data duplication and larger document sizes.


let course = {
  author: {
    name: 'Emad'
  }
}
// check the : embedding-relation.js

/---------------------------------------/
3- Hybrid Approach:
You can combine both approaches when needed. For instance, you can embed 
a small subset of data and reference more detailed documents

let author = {
  name: 'Emad'
  // other lots of properties 
}
let course = {
  author: {
    id: 'ref',
    name: 'Emad'
  }
}
/---------------------------------------/
# intro to Authentication and Authorization :
- Authentication: is the process of verifying the identity of a user or system. It ensures that the person or entity is who they claim to be. (Purpose: To confirm the user’s identity before allowing access to resources.)

- Authorization: is the process of determining what permissions a user or system has. It decides whether a user is allowed to access a certain resource or perform a specific action.(Purpose: To control what actions or resources the authenticated user can access.)

Authentication = Who are you?
Authorization = What are you allowed to do?
# -----------------------------------------------------------------

# Register : POST /api/users {name , email , password }
# Login : POST /api/logins
