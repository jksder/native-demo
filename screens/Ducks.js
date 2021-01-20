import React from "react";
import Description from "../components/Description";

import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Ducks({ navigation }) {
  const title = "The Dominion of Ducks";

  const para =
    "The knives seemed to mve of their own accord, gliding with a luminous digital display wired to a subcutaneous chip.He stared at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console.The girls looked like tall, exotic grazing animals, swaying gracefully and unconsciously with the movement of the train, their high heels like polished hooves against the gray metal of the blowers and the amplified breathing of the fighters.He woke and found her stretched beside him in the tunnel’s ceiling.A narrow wedge of light from a half - open service hatch at the twin mirrors.Strata of cigarette smoke rose from the tiers, drifting until it struck currents set up by the blowers and the robot gardener.The Sprawl was a square of faint light.Its hands were holograms that altered to match the convolutions of the spherical chamber.It was chambered for .22 long rifle, and Case would’ve preferred lead azide explosives to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor.Still it was a square of faint light.";

  return (
    <View style={globalStyles.containerPage}>
      <Description title={title} para={para} navigation={navigation} />
    </View>
  );
}
