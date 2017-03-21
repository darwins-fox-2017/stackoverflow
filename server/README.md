# stackoverflow

## DB Schema

#### User
- name
- email
- password
- salt
- username

#### Question
- title
- content
- user_id

#### Vote
- user_id
- question_id
- count

#### Answer
- question_id
- user_id
- content
