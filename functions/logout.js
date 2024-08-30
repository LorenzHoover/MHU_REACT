import { redirect } from 'react-router-dom'
import { supabase } from '../src/supabase/supabaseClient'

export async function logout() {
    await supabase.auth.signOut()
    redirect('/Auth')
}