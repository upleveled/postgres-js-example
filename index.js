import camelcaseKeys from 'camelcase-keys';
import postgres from 'postgres';

// Don't do this, this is only for the demo
const { createRequire } = await import('module');
const require = createRequire(import.meta.url);

// Read in the values from the .env file
// (which should be ignored in Git!)
require('dotenv-safe').config();

// Connect to PostgreSQL
const sql = postgres();

async function getTeamMembers() {
  return camelcaseKeys(await sql`SELECT * FROM team_members`);
}

const teamMembers = await getTeamMembers();
console.log('all team members:', teamMembers);

async function getTeamMemberById(id) {
  const matchingTeamMembers = camelcaseKeys(
    await sql`SELECT * FROM team_members WHERE id = ${id}`,
  );
  return matchingTeamMembers[0];
}

const teamMember7 = await getTeamMemberById(7);
console.log('team member with id 7:', teamMember7);

console.log('first name of team member 7:', teamMember7.firstName);

// Don't do this, only for demo purposes
sql.end({ timeout: 0 });
