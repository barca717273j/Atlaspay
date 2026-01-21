<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
<script>
  const supabaseUrl = "https://vkfuvijagxwkmuposbya.supabase.co";
  const supabaseKey = "grant select on table api.<your_table> to anon; grant select, insert, update, delete on table api.<your_table> to authenticated;";

  const supabase = supabase.createClient(supabaseUrl, supabaseKey);
</script>
