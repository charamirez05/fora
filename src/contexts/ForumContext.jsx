import React, { useContext, useState } from 'react'


const ForumContext = React.createContext();



export function useForum() {
    return useContext(ForumContext)
}


export function ForumProvider({ children }) {


    const [forums, setForums] = useState([]);
    const [forum, setForum] = useState(null);

    const [generalForum, setGeneralForum] = useState([]);
    const [mathForum, setMathForum] = useState([]);
    const [popCultureForum, setPopCultureForum] = useState([]);



    const fetchForums = async () => {

        try {
            const res = await fetch('/api/forums')
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
        const res = await fetch('/api/forums', {
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
            const res = await fetch(`/api/forums/${forumId}`);
            const data = await res.json();
            console.log(data)
            setForum(data);


        } catch {
            console.log("Error fetching data.", error);
        }
    }



    return (
        <ForumContext.Provider value={{ forums, forum, generalForum, mathForum, popCultureForum, fetchForums, getForumByID, setForumTopics, createNewForum }}>

            {children}


        </ForumContext.Provider>
    )

}
