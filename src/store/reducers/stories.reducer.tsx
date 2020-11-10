import {IAction} from "../actions";
import {GET_STORIES} from "../actions/stories.action";
import {IPost} from "./posts.reducer";
import {Story} from "react-insta-stories/dist/interfaces";
import {Redirect} from "react-router";
import React from "react";

export interface IStory {
    id: string
    name: string
    posts: IPost[]
}

interface IStoriesState {
    stories: Story[]
}

const initialState: IStoriesState = {
    stories: [{}]
}

export const storiesReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case GET_STORIES: {
            const stories = action.data.map((story: IStory) => {
                return {
                    url: story.posts[0].imageIndex,
                    header: {
                        heading: story.posts[0].user.fullName,
                        subheading: story.name,
                        profileImage: story.posts[0].user.avatar,
                    },
                    seeMore: () => <Redirect to={`/posts/${story.posts[0].id}`}/>
                }
            })
            return {
                ...state,
                stories: stories
            }
        }
        default: {
            return {
                ...state
            }
        }
    }

}