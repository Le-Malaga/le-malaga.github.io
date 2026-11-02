import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ybovhrbnbednnxppofmv.supabase.co'
const supabaseKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_YTyGOimAhimBF6Ymn7yd4A_1StH_LXd'

export const supabase = createClient(supabaseUrl, supabaseKey)
