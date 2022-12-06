import styles from './Comment.module.css'
import { LinkSimple, ThumbsDown, ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment(props){
    const [likes, setLikes] = useState(0);

    function HandleLikeComment(){
        setLikes(likes + 1)
    }

    function HandleDeleteComment(){
        props.deleteComment(props.content);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/94126271?v=4'/>
            

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Igor Siqueira Vilhena</strong>
                            <time>20 de agosto  </time>
                        </div>
                        
                        <button onClick={HandleDeleteComment} title='Deletar comentario'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>
                <footer>
                    <button onClick={HandleLikeComment}>
                        <ThumbsUp /> {' '}
                        <span>Aplaudir {' * '} {likes}</span>
                    </button>
                    
                </footer>
            </div>
        </div>
    );
}