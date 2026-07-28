# Mental Math Trainer

A fast-paced, Zetamac-style mental arithmetic game built with React and Supabase. Sharpen your speed and accuracy across addition, subtraction, multiplication, and division — track your scores, build streaks, and compete against your own personal bests.

## Features

- **Configurable operators** — practice addition, subtraction, multiplication, division, or any combination
- **Difficulty presets and custom ranges** — choose a preset difficulty or set your own number ranges per operator
- **Timed rounds** — customizable timer to fit quick practice sessions or longer drills
- **Scoring** — real-time score tracking as you solve problems
- **Streaks** — track consecutive correct answers to push your focus
- **User profiles** — sign in and save your progress via Supabase Auth
- **Score history** — review past sessions and track improvement over time

## Tech Stack

- **Frontend:** React
- **Backend / Auth / DB:** [Supabase](https://supabase.com) (PostgreSQL, Auth, Realtime)
- **Deployment:** [Vercel](https://vercel.com)

## Live App

Deployed on Vercel: [https://mental-math-trainer-phi.vercel.app/](https://mental-math-trainer-phi.vercel.app/) 

## Supabase Setup
 
This project uses Supabase for authentication and score persistence. Schema setup is scripted via the Supabase CLI — see [`supabase/README.md`](./supabase/README.md) for full instructions. In short:
 
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
