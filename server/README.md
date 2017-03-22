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
- slug

#### Vote
- user_id
- question_id
- type[1|-1]

#### Answer
- question_id
- user_id
- content
