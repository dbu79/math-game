# Mental Math Trainer

A Zetamac-style mental arithmetic game built with React and Supabase.
Deployed on Vercel: [https://mental-math-trainer-phi.vercel.app/](https://mental-math-trainer-phi.vercel.app/) 

## Features

- **Configurable operators & times** — practice addition, subtraction, multiplication, division, or any combination at a chosen interval
- **Difficulty presets and custom ranges** — choose a preset difficulty or set your own number ranges per operator
    Difficulty | Addition operands | Multiplication operands |
    |------------|--------------------|--------------------------|
    | Easy       | 2–100 and 2–100    | 2–12 and 2–100           |
    | Medium     | 10–500 and 10–500  | 2–19 and 2–50            |
    | Hard       | 50–1000 and 50–1000| 2–25 and 2–100           |
- **Streaks** — tracking daily playing streak, and time spent playing
- **User profiles** — sign in and save your progress via Supabase Auth
- **Score history** — review past sessions and track improvement over time

## Stack

- **Frontend:** React
- **Backend / Auth / DB:** [Supabase](https://supabase.com) (PostgreSQL, Auth, Realtime)
- **Deployment:** [Vercel](https://vercel.com)

## Supabase Setup
 
This project uses Supabase for authentication and score persistence. Schema setup is scripted via the Supabase CLI:
 
```bash
npm install -g supabase
supabase login
supabase link --project-ref kcmshrypmdyzjtzfkxew
supabase db push
```

## Schema overview
 
**`scores`**
 
| column      | type         | notes                          |
|-------------|--------------|---------------------------------|
| id          | uuid (pk)    | auto-generated                  |
| user_id     | uuid (fk)    | references `auth.users`         |
| score       | integer      |                                  |
| accuracy    | numeric      |                                  |
| duration    | integer      | round length in seconds         |
| difficulty  | text         |                                  |
| created_at  | timestamptz  | defaults to `now()`             |

## Future Plans

- [ ] Leaderboards (global / friends)
- [ ] Mobile-friendly layout improvements

## License

MIT
