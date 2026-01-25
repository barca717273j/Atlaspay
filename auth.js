import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://vkfuvijagxwkmuposbya.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrZnV2aWphZ3h3a211cG9zYnlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4NjExMTUsImV4cCI6MjA4NDQzNzExNX0.O1-1PACGNTz9aUAwItWFgGBiaoEgvigDel8ezaSJAJs'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
