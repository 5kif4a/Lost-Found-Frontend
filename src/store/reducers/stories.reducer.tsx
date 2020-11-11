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

export interface IStoriesState {
    stories: Story[]
}

const initialState: IStoriesState = {
    stories: [{}]
}

export const storiesReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case GET_STORIES: {
            const data: Array<any> = action.data.map((block: any) => block.posts)
            console.log(data.flat())
            const stories = data.flat().map((story: any) => {
                return {
                    url: story.imageIndex,
                    header: {
                        heading: story.user.fullName,
                        subheading: story.name,
                        profileImage: story.user.avatar,
                    },
                    seeMore: () => <Redirect to={`/posts/${story.id}`}/>
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