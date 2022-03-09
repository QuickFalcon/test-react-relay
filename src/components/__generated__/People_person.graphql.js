/**
 * @generated SignedSource<<47b45fd1622cae0679b33d1912a61b53>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type Person_person$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type People_person$fragmentType: FragmentType;
export type People_person$data = {|
  +allPersons: $ReadOnlyArray<?{|
    +$fragmentSpreads: Person_person$fragmentType,
  |}>,
  +$fragmentType: People_person$fragmentType,
|};
export type People_person$key = {
  +$data?: People_person$data,
  +$fragmentSpreads: People_person$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "People_person",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Person",
      "kind": "LinkedField",
      "name": "allPersons",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Person_person"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node/*: any*/).hash = "a4916f9a2b3010f180ff7fa5f22ecdb9";

module.exports = ((node/*: any*/)/*: Fragment<
  People_person$fragmentType,
  People_person$data,
>*/);
