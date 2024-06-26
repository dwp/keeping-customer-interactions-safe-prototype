/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

// defaults for UR 23/2/2023 make decision
  'Actions': '',
  'applymeasures1': '',
  'applymeasures2': '',
  'applymeasures3': '',
  'Actions2': '',
  'applymeasures12': '',
  'applymeasures22': '',
  'applymeasures32': '',
  'Actions3': '',
  'applymeasures13': '',
  'applymeasures23': '',
  'applymeasures33': '',
  // defaults for UR 1/3/2023 report journey
  'report-type': '',
  'on-behalf': '',
  'review-manager': '',
  'interaction': '',
  'location': '',
  'discrimination': '',
  'witnesses' : '',
  'add-files' : '',
  'incident-date-readable-month' : '',
  'checklist' : '9',
  // defaults for UR 2/3/2023 manager journey
  'policeQuestion' : '9',
  'decision_scenario' : '9',
  // v11 report type
  'report_type' : 'none',
  // display mode default to presentation mode
  'displaymode' : ["design"],
  // UR 7/7/23 defaults for action dates
  'otherdate' : ' ', 
  'date-interview' : ' ',
  // UR 29/1/24 changeable default value of date
  '2401_incident_date': '14 February 2024', //incident date
  '2401_incident_date_review': '14 February 2025', // review date
  '2401_actions': '', // initialise checkbox
  '2401_actions_dm': '', // initialise checkbox
  '2401_applymeasures1': '', // initialise checkbox
  '2401_applymeasures2': '', // initialise checkbox
  '2401_applymeasures3': '', // initialise checkbox
  '2401_manager1_report': 'I have spoken to the reporter offered support. The account is simple. Weve had no previous trouble with this caller. I am not sure what measures are appropriate, but I have informed his JCP.',
  '2401_bs1_report': 'LM Comments requested, Threat Guidance issued, Triaged to NM Inbox..',
  '2401_incident1_location': 'Newcastle Call Centre (NCP)',
  '2401_lmreminder': '',
  // UR 22/4/24 accessibility
  '202404report-type': ' ', // initialise checkbox
  '20240422_managername': ' ', // initialise checkbox
  '202404_acting-manager': ' ', // initialise checkbox
  '202404_business': ' ', // initialise checkbox
  '202404_interaction': ' ', // initialise checkbox
  '202404_incident-date': ' ', // initialise checkbox
  '202404_incident-date_choose': ' ', // initialise checkbox
  '202404_location': ' ', // initialise checkbox
  '202404_discrimination': ' ', // initialise checkbox
  '202404_witnesses': ' ', // initialise checkbox
  '202404_add-files': ' ' // initialise checkbox
}
