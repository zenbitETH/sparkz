#include <stdio.h>
#include <iostream>
#include <assert.h>
#include "circom.hpp"
#include "calcwit.hpp"
void LocationProof_0_create(uint soffset,uint coffset,Circom_CalcWit* ctx,std::string componentName,uint componentFather);
void LocationProof_0_run(uint ctx_index,Circom_CalcWit* ctx);
void validatePublicLocation_0(Circom_CalcWit* ctx,FrElement* lvar,FrElement* destination,int destination_size);
Circom_TemplateFunction _functionTable[1] = { 
LocationProof_0_run };
uint get_main_input_signal_start() {return 2;}

uint get_main_input_signal_no() {return 4;}

uint get_total_signal_no() {return 6;}

uint get_number_of_components() {return 1;}

uint get_size_of_input_hashmap() {return 256;}

uint get_size_of_witness() {return 6;}

uint get_size_of_constants() {return 71;}

uint get_size_of_io_map() {return 0;}

// function declarations
void validatePublicLocation_0(Circom_CalcWit* ctx,FrElement* lvar,FrElement* destination,int destination_size){
FrElement* circuitConstants = ctx->circuitConstants;
FrElement expaux[10];
{
PFrElement aux_dest = &lvar[58];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[1]);
}
{
PFrElement aux_dest = &lvar[59];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[3]);
}
{
PFrElement aux_dest = &lvar[60];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[5]);
}
{
PFrElement aux_dest = &lvar[61];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[6]);
}
{
PFrElement aux_dest = &lvar[62];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[7]);
}
{
PFrElement aux_dest = &lvar[63];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[8]);
}
{
PFrElement aux_dest = &lvar[64];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[9]);
}
{
PFrElement aux_dest = &lvar[65];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[10]);
}
{
PFrElement aux_dest = &lvar[66];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[11]);
}
{
PFrElement aux_dest = &lvar[67];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[12]);
}
{
PFrElement aux_dest = &lvar[68];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[13]);
}
{
PFrElement aux_dest = &lvar[69];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[14]);
}
{
PFrElement aux_dest = &lvar[70];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[15]);
}
{
PFrElement aux_dest = &lvar[71];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[16]);
}
{
PFrElement aux_dest = &lvar[72];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[17]);
}
{
PFrElement aux_dest = &lvar[73];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[18]);
}
{
PFrElement aux_dest = &lvar[74];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[19]);
}
{
PFrElement aux_dest = &lvar[75];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[20]);
}
{
PFrElement aux_dest = &lvar[76];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[21]);
}
{
PFrElement aux_dest = &lvar[77];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[22]);
}
{
PFrElement aux_dest = &lvar[78];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[23]);
}
{
PFrElement aux_dest = &lvar[79];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[24]);
}
{
PFrElement aux_dest = &lvar[80];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[25]);
}
{
PFrElement aux_dest = &lvar[81];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[26]);
}
{
PFrElement aux_dest = &lvar[82];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[27]);
}
{
PFrElement aux_dest = &lvar[83];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[28]);
}
{
PFrElement aux_dest = &lvar[84];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[29]);
}
{
PFrElement aux_dest = &lvar[85];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[30]);
}
{
PFrElement aux_dest = &lvar[86];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[31]);
}
{
PFrElement aux_dest = &lvar[87];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[32]);
}
{
PFrElement aux_dest = &lvar[88];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[33]);
}
{
PFrElement aux_dest = &lvar[89];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[34]);
}
{
PFrElement aux_dest = &lvar[90];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[35]);
}
{
PFrElement aux_dest = &lvar[91];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[36]);
}
{
PFrElement aux_dest = &lvar[92];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[37]);
}
{
PFrElement aux_dest = &lvar[93];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[38]);
}
{
PFrElement aux_dest = &lvar[94];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[39]);
}
{
PFrElement aux_dest = &lvar[95];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[40]);
}
{
PFrElement aux_dest = &lvar[96];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[41]);
}
{
PFrElement aux_dest = &lvar[97];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[42]);
}
{
PFrElement aux_dest = &lvar[98];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[43]);
}
{
PFrElement aux_dest = &lvar[99];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[44]);
}
{
PFrElement aux_dest = &lvar[100];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[45]);
}
{
PFrElement aux_dest = &lvar[101];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[31]);
}
{
PFrElement aux_dest = &lvar[102];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[46]);
}
{
PFrElement aux_dest = &lvar[103];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[47]);
}
{
PFrElement aux_dest = &lvar[104];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[48]);
}
{
PFrElement aux_dest = &lvar[105];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[49]);
}
{
PFrElement aux_dest = &lvar[106];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[50]);
}
{
PFrElement aux_dest = &lvar[107];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[51]);
}
{
PFrElement aux_dest = &lvar[108];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[52]);
}
{
PFrElement aux_dest = &lvar[109];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[53]);
}
{
PFrElement aux_dest = &lvar[110];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[54]);
}
{
PFrElement aux_dest = &lvar[111];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[55]);
}
{
PFrElement aux_dest = &lvar[4];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[58],3);
}
{
PFrElement aux_dest = &lvar[7];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[61],3);
}
{
PFrElement aux_dest = &lvar[10];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[64],3);
}
{
PFrElement aux_dest = &lvar[13];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[67],3);
}
{
PFrElement aux_dest = &lvar[16];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[70],3);
}
{
PFrElement aux_dest = &lvar[19];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[73],3);
}
{
PFrElement aux_dest = &lvar[22];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[76],3);
}
{
PFrElement aux_dest = &lvar[25];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[79],3);
}
{
PFrElement aux_dest = &lvar[28];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[82],3);
}
{
PFrElement aux_dest = &lvar[31];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[85],3);
}
{
PFrElement aux_dest = &lvar[34];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[88],3);
}
{
PFrElement aux_dest = &lvar[37];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[91],3);
}
{
PFrElement aux_dest = &lvar[40];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[94],3);
}
{
PFrElement aux_dest = &lvar[43];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[97],3);
}
{
PFrElement aux_dest = &lvar[46];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[100],3);
}
{
PFrElement aux_dest = &lvar[49];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[103],3);
}
{
PFrElement aux_dest = &lvar[52];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[106],3);
}
{
PFrElement aux_dest = &lvar[55];
// load src
// end load src
Fr_copyn(aux_dest,&lvar[109],3);
}
{
PFrElement aux_dest = &lvar[112];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[0]);
}
{
PFrElement aux_dest = &lvar[113];
// load src
// end load src
Fr_copy(aux_dest,&circuitConstants[0]);
}
Fr_lt(&expaux[0],&lvar[113],&circuitConstants[57]); // line circom 49
while(Fr_isTrue(&expaux[0])){
Fr_eq(&expaux[4],&lvar[0],&lvar[(((3 * Fr_toInt(&lvar[113])) + 0) + 4)]); // line circom 50
Fr_add(&expaux[7],&lvar[(((3 * Fr_toInt(&lvar[113])) + 1) + 4)],&lvar[3]); // line circom 51
Fr_leq(&expaux[5],&lvar[1],&expaux[7]); // line circom 51
Fr_land(&expaux[3],&expaux[4],&expaux[5]); // line circom 50
Fr_sub(&expaux[6],&lvar[(((3 * Fr_toInt(&lvar[113])) + 1) + 4)],&lvar[3]); // line circom 52
Fr_geq(&expaux[4],&lvar[1],&expaux[6]); // line circom 52
Fr_land(&expaux[2],&expaux[3],&expaux[4]); // line circom 50
Fr_add(&expaux[5],&lvar[(((3 * Fr_toInt(&lvar[113])) + 2) + 4)],&lvar[3]); // line circom 53
Fr_leq(&expaux[3],&lvar[2],&expaux[5]); // line circom 53
Fr_land(&expaux[1],&expaux[2],&expaux[3]); // line circom 50
Fr_sub(&expaux[4],&lvar[(((3 * Fr_toInt(&lvar[113])) + 1) + 4)],&lvar[3]); // line circom 54
Fr_geq(&expaux[2],&lvar[2],&expaux[4]); // line circom 54
Fr_land(&expaux[0],&expaux[1],&expaux[2]); // line circom 50
if(Fr_isTrue(&expaux[0])){
{
PFrElement aux_dest = &lvar[112];
// load src
Fr_add(&expaux[0],&lvar[112],&circuitConstants[2]); // line circom 55
// end load src
Fr_copy(aux_dest,&expaux[0]);
}
}
{
PFrElement aux_dest = &lvar[113];
// load src
Fr_add(&expaux[0],&lvar[113],&circuitConstants[2]); // line circom 49
// end load src
Fr_copy(aux_dest,&expaux[0]);
}
Fr_lt(&expaux[0],&lvar[113],&circuitConstants[57]); // line circom 49
}
// return bucket
Fr_copy(destination,&lvar[112]);
return;
}

// template declarations
void LocationProof_0_create(uint soffset,uint coffset,Circom_CalcWit* ctx,std::string componentName,uint componentFather){
ctx->componentMemory[coffset].templateId = 0;
ctx->componentMemory[coffset].templateName = "LocationProof";
ctx->componentMemory[coffset].signalStart = soffset;
ctx->componentMemory[coffset].inputCounter = 4;
ctx->componentMemory[coffset].componentName = componentName;
ctx->componentMemory[coffset].idFather = componentFather;
ctx->componentMemory[coffset].subcomponents = new uint[0];
}

void LocationProof_0_run(uint ctx_index,Circom_CalcWit* ctx){
FrElement* signalValues = ctx->signalValues;
u64 mySignalStart = ctx->componentMemory[ctx_index].signalStart;
std::string myTemplateName = ctx->componentMemory[ctx_index].templateName;
std::string myComponentName = ctx->componentMemory[ctx_index].componentName;
u64 myFather = ctx->componentMemory[ctx_index].idFather;
u64 myId = ctx_index;
u32* mySubcomponents = ctx->componentMemory[ctx_index].subcomponents;
FrElement* circuitConstants = ctx->circuitConstants;
std::string* listOfTemplateMessages = ctx->listOfTemplateMessages;
FrElement expaux[5];
FrElement lvar[0];
uint sub_component_aux;
{

// start of call bucket
FrElement lvarcall[114];
// copying argument 0
Fr_copy(&lvarcall[0],&signalValues[mySignalStart + 1]);
// end copying argument 0
// copying argument 1
Fr_copy(&lvarcall[1],&signalValues[mySignalStart + 2]);
// end copying argument 1
// copying argument 2
Fr_copy(&lvarcall[2],&signalValues[mySignalStart + 3]);
// end copying argument 2
// copying argument 3
Fr_copy(&lvarcall[3],&signalValues[mySignalStart + 4]);
// end copying argument 3
validatePublicLocation_0(ctx,lvarcall,&signalValues[mySignalStart + 0],1);
// end call bucket
}

}

void run(Circom_CalcWit* ctx){
LocationProof_0_create(1,0,ctx,"main",0);
LocationProof_0_run(0,ctx);
}

