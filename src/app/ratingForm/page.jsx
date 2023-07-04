'use client'

import styles from './rating.module.css'
import { useState } from 'react';

export default function RatingForm () {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(parseInt(e.target.value));
    };
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar cualquier acción con los datos del formulario, como enviarlos a un servidor o guardarlos en una base de datos.
        console.log('Name:', name);
        console.log('Rating:', rating);
        console.log('Comment:', comment);
    };
    const [hoveredRating, setHoveredRating] = useState(0);
    const [selectedRating, setSelectedRating] = useState(0);
  
    const handleMouseEnter = (rating) => {
        setHoveredRating(rating);
      };
    
      const handleMouseLeave = () => {
        setHoveredRating(0);
      };
    
      const handleClick = (rating) => {
        setSelectedRating(rating);
      };
      
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <p className={styles.val}>Agradeceriamos que nos dejes tu Valoracion sobre la pagina y el servicio Otorgado!</p>

            <div className={styles.form}>
                <label htmlFor="name" className={styles.label}>Nombre:</label>
                <textarea id="name" value={name} className={styles.textarea} onChange={handleNameChange}></textarea>
            </div>

            <div>
                <div id="rating" value={rating} onChange={handleRatingChange} className={styles.ratingButton}>
                    {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                        key={rating}
                        className={`${styles.star} ${rating <= hoveredRating ? styles.hovered : ''} ${
                            rating <= selectedRating ? styles.selected : ''
                        }`}
                        onMouseEnter={() => handleMouseEnter(rating)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(rating)}
                        >
                        ★
                        </button>
                    ))}
                    </div>
            </div>

            <div className={styles.form}>
                <label htmlFor="comment" className={styles.label}>Comentario:</label>
                <textarea id="comment" value={comment} onChange={handleCommentChange} className={styles.textarea2}></textarea>
            </div>

            <div className={styles.butVal} >
                        <button className={styles.btn} type="submit">
                        <strong className={styles.strong} >Valorar</strong>
                        <div className={styles.containerStars}>
                        <div className={styles.stars}></div>
                        </div>

                        <div className={styles.glow}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        </div>
                        </button>
            </div>
        </form>
        );
    };
