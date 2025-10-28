import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_SUPABASE_URL
const supabaseKey = process.env.REACT_SUPABASE_API

const supabase = createClient(supabaseUrl, supabaseKey)