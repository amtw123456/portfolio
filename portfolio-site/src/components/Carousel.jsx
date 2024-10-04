import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ProjectCarousel = ({ project }) => {
    const carouselId = `carousel-${uuidv4()}`;

    useEffect(() => {
        console.log(project);
    }, [project]);

    return (
        <div>
            <div id={carouselId} className="carousel slide carousel-dark" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    {project.images.map((_, index) => (
                        <li
                            key={index}
                            data-bs-target={`#${carouselId}`}
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                        ></li>
                    ))}
                </ol>
                <div className="carousel-inner ">
                    {project.images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img
                                className="d-block w-full h-80 object-cover hover:scale-150 transition-transform duration-300 ease-in-out"
                                src={image}
                                alt={`Slide ${index + 1}`}
                            />

                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href={`#${carouselId}`} role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href={`#${carouselId}`} role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </div>


    );
};

export default ProjectCarousel;
