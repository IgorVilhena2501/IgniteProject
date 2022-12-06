import { Comment } from './Comment'
import styles from './Post.module.css'
import { Avatar } from './Avatar'
import { LineSegment } from 'phosphor-react'
import { useState } from 'react';




export function Post(props){
    const [comments, setComments] = useState([
        
    ]);


    function Submit () {
        event.preventDefault();
        
        setComments([...comments, event.target.commentInformation.value])
        event.target.commentInformation.value = ''
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne);
    }

    let contagemComments = 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    
                    <Avatar hasBorder={true} src={props.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>
                            {props.author.role}
                        </span>
                        
                    </div>
                </div>

                <time>{props.publishedAt.toString()}</time>
            </header>

            <div className={styles.content}>
                {props.content?.map(element => {

                    contagemComments = contagemComments + 1

                    if(element.type == 'paragraph'){
                        return <p key={contagemComments}>{element.content}</p>
                    }else{
                        return <p key={contagemComments}><a href="#">{element.content}</a></p>
                    }
                })}
            </div>


            <form onSubmit={Submit} className={styles.commentForm}>
                <strong>Deixe seu feedBack</strong>

                <textarea id="commentInformation" placeholder='Deixe seu comentario'>
                    
                </textarea>


                <footer>
                    <button type='Submit' >Publicar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return <Comment
                                    key={comment}
                                    deleteComment = {deleteComment}
                                    content = {comment}
                                />
                    })
                }
            </div>
        </article>
    )
}

