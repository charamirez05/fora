import React, { useContext, useState } from 'react'


const ForumContext = React.createContext();



export function useForum() {
    return useContext(ForumContext)
}


export function ForumProvider({ children }) {


    const [forums, setForums] = useState([]);

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

        
        if(isHome){
            setGeneralForum(generalTopicArray.slice(0,3));
            setMathForum(mathTopicArray.slice(0,3));
            setPopCultureForum(popCultureTopicArray.slice(0,3));
        }
        else{
            setGeneralForum(generalTopicArray);
            setMathForum(mathTopicArray);
            setPopCultureForum(popCultureTopicArray);
        }
      
    }



    return (
        <ForumContext.Provider value={{ forums, generalForum, mathForum, popCultureForum, fetchForums, setForumTopics }}>

            {children}


        </ForumContext.Provider>
    )

}
