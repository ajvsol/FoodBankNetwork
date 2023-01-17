import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ypecfggppeohabjrntsj.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZWNmZ2dwcGVvaGFianJudHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM4NzYwMzIsImV4cCI6MTk4OTQ1MjAzMn0.apt0qpAftIzwDGRUnKDXsUQxfACNcWi8VohnBEB4Fz0"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase