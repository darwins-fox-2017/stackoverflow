import Home from './components/Home.vue'
import Shop from './components/Shop.vue'
import User from './components/user/User.vue'

import Item from './components/item/Item.vue'
import ItemAll from './components/item/ItemAll.vue'
import ItemDetail from './components/item/ItemDetail.vue'
import ItemNew from './components/item/ItemNew.vue'
import ItemEdit from './components/item/ItemEdit.vue'

import Question from './components/question/Question.vue'
import QuestionAll from './components/question/QuestionAll.vue'
import QuestionDetail from './components/question/QuestionDetail.vue'
import QuestionNew from './components/question/QuestionNew.vue'
import QuestionEdit from './components/question/QuestionEdit.vue'

import Answer from './components/answer/Answer.vue'
import AnswerAll from './components/answer/AnswerAll.vue'
import AnswerDetail from './components/answer/AnswerDetail.vue'
import AnswerNew from './components/answer/AnswerNew.vue'
import AnswerEdit from './components/answer/AnswerEdit.vue'

export const routes = [
  { path : '', component: Home, children: [
    {path: '/shop', component: Shop}
  ]},
  { path : '/users', component: User},
  { path : '/items', component:Item, children: [
    {path: '', component: ItemAll},
    {path: 'new', component: ItemNew},
    {path: ':id', component: ItemDetail},
    {path: ':id/edit', component: ItemEdit}
  ]},
  { path : '/questions', component:Question, children: [
    {path: '', component: QuestionAll},
    {path: 'new', component: QuestionNew},
    {path: ':id', component: QuestionDetail},
    {path: ':id/edit', component: QuestionEdit}
  ]},
  { path : '/answers', component:Answer, children: [
    {path: '', component: AnswerAll},
    {path: 'new', component: AnswerNew},
    {path: ':id', component: AnswerDetail},
    {path: ':id/edit', component: AnswerEdit}
  ]}
]
