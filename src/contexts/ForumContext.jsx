import React, { useContext, useState } from 'react'


const ForumContext = React.createContext();



export function useForum() {
    return useContext(ForumContext)
}


export function ForumProvider({ children }) {


    const [forums, setForums] = useState([]);
    const [forum, setForum] = useState("");

    const [generalForum, setGeneralForum] = useState([]);
    const [mathForum, setMathForum] = useState([]);
    const [popCultureForum, setPopCultureForum] = useState([]);



    const fetchForums = async () => {

        try {
            const res = await fetch('https://fora-backend.onrender.com/forums')
            const data = await res.json();
            setForums(data);


        } catch {
            console.log("Error fetching data.", error);
        }
    }


    const setForumTopics = (isHome) => {
        let generalTopicArray = [];
        let mathTopicArray = [];
        let popCultureTopicArray = []



        forums.forEach(forum => {

            if (forum.topic === "general") {
                generalTopicArray = [...generalTopicArray, forum];
            }
            else if (forum.topic === "math") {

                mathTopicArray = [...mathTopicArray, forum];
            }

            else if (forum.topic === "popculture") {

                popCultureTopicArray = [...popCultureTopicArray, forum];

            }

        });


        if (isHome) {
            setGeneralForum(generalTopicArray.slice(0, 3));
            setMathForum(mathTopicArray.slice(0, 3));
            setPopCultureForum(popCultureTopicArray.slice(0, 3));
        }
        else {
            setGeneralForum(generalTopicArray);
            setMathForum(mathTopicArray);
            setPopCultureForum(popCultureTopicArray);
        }

    }


    const createNewForum = async (newForum) => {
        const res = await fetch('https://fora-backend.onrender.com/forums', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newForum),
        });

        return;
    }

    const getForumByID = async (forumId) => {
        try {
            const res = await fetch(`https://fora-backend.onrender.com/forums/${forumId}`);
            const data = await res.json();
            setForum(data);


        } catch {
            console.log("Error fetching data.", error);
        }
    }



    const updateForumStar = async (updatedPost, forumId) => {
        const res = await fetch(`https://fora-backend.onrender.com/forums/${forumId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPost),
        });

        return;
    }

    const removeForum = async (forumId) => {
        const res = await fetch(`https://fora-backend.onrender.com/forums/${forumId}`, {
            method: 'DELETE',  
        });

        return;
    }


    const addComment = async (newComment, forumId) => {
        const res = await fetch(`https://fora-backend.onrender.com/forums/${forumId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment),
        });

        return;
    }


    return (
        <ForumContext.Provider value={{ forums, forum, generalForum, mathForum, popCultureForum, fetchForums, getForumByID, setForumTopics, createNewForum, updateForumStar, removeForum, addComment}}>

            {children}


        </ForumContext.Provider>
    )

}
