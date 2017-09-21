import * as ActionType from './ActionType';
import CourseApi from '../api/CourseApi';

export const getCoursesResponse = courses => ({
    type: ActionType.GET_COURSES_RESPONSE,
    courses
});

export function getCoursesAction() {
    return (dispatch) => {
        return CourseApi.getAllCourses()
            .then(courses => {
                dispatch(getCoursesResponse(courses));
            }).catch(error => {
                throw error;
            });
    };
}