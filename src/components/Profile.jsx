import React from "react";

const Profile = () => {
    return(
        <main className='content'>
            <img className='profile-bg' src='https://pbs.twimg.com/profile_banners/906249726512812032/1504902312/1500x500' alt='profile bg'/>
            <article className='profile-info'>
                ava + description
            </article>
            <section className='my-wall'>
                my posts
                <div className='new-post'>
                    new post
                </div>
                <section className='previous-posts'>
                    <div className='post'>
                        post 1
                    </div>
                    <div className='post'>
                        post 2
                    </div>
                </section>
            </section>
        </main>
    )
};

export default Profile;