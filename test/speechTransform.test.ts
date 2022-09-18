
import { assertEquals } from "https://deno.land/std@0.127.0/testing/asserts.ts";
import speechTransform from '../src/speechTransform.ts';


Deno.test("speechTransform", () => {
    const expected = '';
    const actual = speechTransform('');

    assertEquals<string>(actual, expected);
});

Deno.test("Remove root", () => {

    const expected = `<p>Frú forseti. Ég óska eftir því að fá að veita andsvar við ræðu hv. síðasta ræðumanns</p>`;

    const actual = speechTransform(`
        <ræðutexti xmlns="http://skema.althingi.is/skema">
            <mgr>Frú forseti. Ég óska eftir því að fá að veita andsvar við ræðu hv. síðasta ræðumanns</mgr>
        </ræðutexti>
    `);

    assertEquals<string>(actual, expected);
});

Deno.test("Set Paragraph", () => {

    const expected =
        '<p>Frú forseti. Ég óska eftir því að fá að veita andsvar við ræðu hv. síðasta ræðumanns</p>\n' +
        '<p>Frú forseti. Ég óska eftir því að fá að veita andsvar við ræðu hv. síðasta ræðumanns</p>';

    const actual = speechTransform(`
        <ræðutexti xmlns="http://skema.althingi.is/skema">
            <mgr>Frú forseti. Ég óska eftir því að fá að veita andsvar við ræðu hv. síðasta ræðumanns</mgr>
            <mgr>Frú forseti. Ég óska eftir því að fá að veita andsvar við ræðu hv. síðasta ræðumanns</mgr>
        </ræðutexti>
    `);

    assertEquals<string>(actual, expected);
});
// Deno.test("Set Paragraph", () => {

//     const expected =
//         '<p>Frú forseti. Ég óska eftir því að fá að veita andsvar við ræðu hv. síðasta ræðumanns</p>\n\n' +
//         '<p>Frú forseti. Ég óska eftir því að fá að veita andsvar við ræðu hv. síðasta ræðumanns</p>';

//     const actual = speechTransform(`
// <ræðutexti xmlns="http://skema.althingi.is/skema">
//     <mgr>Frú forseti. Ég óska eftir því að fá að veita andsvar við ræðu hv. síðasta ræðumanns, hv. þm. Arnbjargar Sveinsdóttir, en var meinað um það og vísað til samkomulags sem  þingflokksformenn hefðu gert í þá veru að talsmenn flokkanna einir og sér ættu orðastað hver við annan í fyrstu umferð og ég hef svo sem ekkert við það að athuga. En ég vissi ekki til þess að þeir væru tveir talsmenn Sjálfstæðisflokksins við þessa umræðu. Annars vegar  hæstv. fjármálaráðherra og hins vegar hv. þm. Arnbjörg Sveinsdóttir og þessi regla gilti um hana. Við værum með öðrum orðum enn þá í fyrstu umferð þessarar umræðu. Það kemur mér dálítið á óvart. Ég hafði einmitt ætlað að inna hana eftir því sama og hún átti hér orðræðu um við hv. þm. Einar Má Sigurðarson þar sem  ýjað er að samkomulagi ríkis og sveitarfélaga og ójafnri skiptingu fjármuna í því sambandi. Ég ætlaði að spyrja hana um hvort þau væru mörg sveitarfélögin í hennar fjórðungi sem hefðu mikið fé handa á milli.</mgr>
//     <mgr>
//       <forseti skst="J&#xF3;hS">Forseti óskar eftir því að hv. þm. fari ekki í efnislega umræðu um fjárlagafrumvarpið undir liðnum um fundarstjórn forseta.</forseti>
//     </mgr>
//     <mgr>Frú forseti. Af því að mér var meinað um þessa efnislegu umræðu þá langar mig að árétta fyrirspurn mína hvort þeir séu margir fleiri talsmenn Sjálfstæðisflokksins í þessari umræðu sem ekki megi eiga orðastað við nema sérteknir aðilar í þessum sal.</mgr>
//     <mgr>
//       <forseti skst="J&#xF3;hS">Eftir því sem forseti best veit er samkomulagið um það að fyrir utan ráðherra sem getur veitt andsvar í fyrstu umferð þá er  einn talsmaður frá hverjum flokki. Um það snýst samkomulagið.</forseti>
//     </mgr>
//     <mgr>Frú forseti. Ég vil þakka þessar upplýsingar. Þá liggur það hér fyrir að Sjálfstæðisflokkurinn hefur þörf á tveimur talsmönnum við þessa umræðu og ég svo sem lýt höfði í því sambandi og hef allan skilning á þeirri þörf.</mgr>
//   </ræðutexti>
//     `);
//     console.log(actual);
//     // assertEquals<string>(actual, expected);
// });